---
title:  多环境交付
---

本节将介绍如何在工作流中使用多环境功能。

在多集群的情况下，我们首先需要在测试集群部署应用，等到测试集群的应用一切正常后，再部署到生产集群。KubeVela 提供了一个 `multi-env` 类型的工作流步骤，可以帮助用户方便的管理多环境配置。

本节将介绍如何在工作流使用 `multi-env` 来管理多环境。

> 在阅读本部分之前，请确保你已经学习了 KubeVela 中的 [Env Binding](../policies/envbinding)。

## 如何使用

部署如下应用部署计划，其工作流中的步骤类型为 `multi-env`：

```yaml
apiVersion: core.oam.dev/v1beta1
kind: Application
metadata:
  name: multi-env-demo
  namespace: default
spec:
  components:
    - name: nginx-server
      type: webservice
      properties:
        image: nginx:1.21
        port: 80

  policies:
    - name: env
      type: env-binding
      properties:
        created: false
        envs:
          - name: test
            patch:
              components:
                - name: nginx-server
                  type: webservice
                  properties:
                    image: nginx:1.20
                    port: 80
            placement:
              clusterSelector:
                labels:
                  purpose: test
          - name: prod
            patch:
              components:
                - name: nginx-server
                  type: webservice
                  properties:
                    image: nginx:1.20
                    port: 80
            placement:
              clusterSelector:
                labels:
                  purpose: prod

  workflow:
    steps:
      - name: deploy-test-server
        # 指定步骤类型
        type: multi-env
        properties:
          # 指定组件名称
          component: nginx-server
          # 指定 policy 名称
          policy: env
          # 指定 policy 中的 env 名称
          env: test
      - name: manual-approval
        # 工作流内置 suspend 类型的任务，用于暂停工作流
        type: suspend
      - name: deploy-prod-server
        type: multi-env
        properties:
          component: nginx-server
          policy: env
          env: prod
```

## 期望结果

查看此时应用的状态：

```shell
kubectl get application multi-env-demo -o yaml
```

可以看到执行到了 `manual-approval` 步骤时，工作流被暂停执行了：

```yaml
...
  status:
    workflow:
      ...
      stepIndex: 2
      steps:
      - name: deploy-test-server
        phase: succeeded
        resourceRef: {}
        type: multi-env
      - name: manual-approval
        phase: succeeded
        resourceRef: {}
        type: suspend
      suspend: true
      terminated: false
```

切换到 `test` 集群，并查看应用的状态：

```shell
$ kubectl get deployment

NAME             READY   UP-TO-DATE   AVAILABLE   AGE
nginx-server     1/1     1            1           1m10s
```

测试集群的应用一切正常后，使用命令继续工作流：

```shell
$ vela workflow resume multi-env-demo

Successfully resume workflow: multi-env-demo
```

重新查看应用的状态：

```shell
kubectl get application multi-env-demo -o yaml
```

可以看到所有步骤的状态均已成功：

```yaml
...
  status:
    workflow:
      ...
      stepIndex: 3
      steps:
      - name: deploy-test-server
        phase: succeeded
        resourceRef: {}
        type: multi-env
      - name: manual-approval
        phase: succeeded
        resourceRef: {}
        type: suspend
      - name: deploy-prod-server
        phase: succeeded
        resourceRef: {}
        type: multi-env
      suspend: false
      terminated: true
```

在 `prod` 集群中，查看应用的状态：

```shell
$ kubectl get deployment

NAME             READY   UP-TO-DATE   AVAILABLE   AGE
nginx-server     1/1     1            1           1m10s
```

可以看到，使用最新配置的组件已经被成功地部署到了两个集群中。

通过 `multi-env`，我们可以轻松地在多个环境中管理应用。
