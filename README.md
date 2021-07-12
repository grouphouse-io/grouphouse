# Grouphouse

## Install: 
1. Install [Docker for Mac](https://docs.docker.com/docker-for-mac/install/) (v3.4.0) 
2. Install [Kubectl](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html) (v1.21.1) 
3. Install [Tilt](https://docs.tilt.dev/install.html) (v0.20.8)
4. Install [Helm](https://helm.sh/), `brew install helm` (v3.5.2)
5. Install [golang](https://golang.org/doc/install) (go1.16.4)
6. Install [yarn](https://yarnpkg.com/) (v1.22.10)

## Setup
1. [Apply](https://kubernetes.github.io/ingress-nginx/deploy/#aws) nginx ingress controller so that the ingress rules work. 
2. Run `make vendor-all`.
3. Set environment type in `Tiltfile` (`dev` or `staging`, `dev` by default).
4. Run `tilt up`.  If `dev` navigate to `http://localhost`, else `https://staging.grouphouse.io`.

## AWS Deployment
[Deployment Docs](./deployment/README.md)

1. Navigate to `./deployment`
2. Run `terraform init` to download providers.
3. `terraform plan`
4. `terraform apply`
5. Update kubectl config: `aws eks --region=us-west-1 update-kubeconfig --name=${cluster name}`

## Repo Tree 
_Docs denoted by all-caps filename_
- [`./README`](./README.md)
- [`./TODO`](./TODO.md)
- [`./CHEATSHEET`](./CHEATSHEET.md)
- `./services`: Dockerized Services 
    - `./grpc`: Example Private GRPC Service
    - [`./public-api/README`](./services/public-api/README.md): Public API Service  
    - [`./web-frontend/README`](./services/web-frontend/README.md): Typescript/React/Redux/REST Web Frontend Service 
- `./libraries`: Shared Local Libraries 
    - [`./golang/README`](libraries/golang/README.md): Shared Golang Libraries 
    - [`./typescript/README`](libraries/typescript/README.md): Shared Typescript Libraries 
- `./env`: Environment Variables 
    - [`./README`](env/README.md)
    - `./charts`
        - [`./values-dev.yaml`](env/charts/values-dev.yaml): Development Variables 
        - [`./values-staging.yaml`](env/charts/values-staging.yaml): Staging Variables 
        - [`./values-prod.yaml`](env/charts/values-prod.yaml): Production Variables 
- `./charts`: Helm Charts 
    - [`./api-store/README`](charts/api-store/README.md)
    - `./grpc`
    - `./public-api`
    - `./web-frontend`
    - [`./ingress/README`](charts/ingress/README.md)
    - [`./external-dns/README`](charts/external-dns/README.md)
- [`./deployment/README`](deployment/README.md): Terraform Deployment

Actions:
- [![GitHub Super-Linter](https://github.com/grouphouse-io/grouphouse/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)

## Community Code-Amendment Best Practices 
- Don't commit directly to master, make PRs. 
- PRs should be reviewed and be required to have a +1 from non-contributor to the PR.
- PRs should have corresponding tests. 
- PRs should include documentation. Documentation should be kept with its relevant code to minimize drift.
- Autogenerated code should not be committed.
- Correct known trip-wires (little annoyances, mistakes, gotchas) immediately - quick fixes pay off dividends.
- Prefix branch name with creator's initials.
- As new items come up, add to [TODO](./TODO.md). 
- Maximize code reuse, minimize service directory size and complexity