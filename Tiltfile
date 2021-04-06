# -*- mode: Python -*-

# Once working, add in
# For more on Extensions, see: https://docs.tilt.dev/extensions.html
# load('ext://restart_process', 'docker_build_with_restart')

# 1. Build Images
services = {
    "api-store": False,
    "grpc": True,
    "public-api": True,
    "web-frontend": True
}

for s in services.keys():
    if services[s]:
        docker_build('{svc}-image'.format(svc = s), context='services/{svc}'.format(svc = s))

# 2. Load yaml Configs
yamls = ["./services/{svc}/tilt.yaml".format(svc = s) for s in services.keys()]
k8s_yaml(yamls)

# 3. Create k8s Resources (w/ Dependencies)
k8s_resource('api-store')
k8s_resource('grpc')
k8s_resource('public-api', resource_deps=['api-store', 'grpc'])
k8s_resource('web-frontend', resource_deps=['public-api'])


