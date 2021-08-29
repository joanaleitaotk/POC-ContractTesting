# Introduction Wiremock
As per http://wiremock.org/, "WireMock is a simulator for HTTP-based APIs. Some might consider it a service virtualization tool or a mock server.". This tool is currently using the standalone application, that allows to add json files to mock requests/responses.

# Getting Started
To have wiremock running local, please following the steps below:
1.	Clone the project
2.	Run "docker-compose up" in the root directory - it should bring up a container that will have wiremock server running;
3.	Open "http://localhost:8181/__admin/" in the browser. It should return the list of mappings already configured, if all works properly. Port 8181 is defined in the docker-compose file.


# Build and Test
After having wiremock running, new APIs can be added in the mappings folder. __files folder is used to store the response body.

Please note that at the moment, when adding new mappings, it's required to stop the container and start it again to "enable" the new methods.

# Contribute
Please add and commit new mocks/APIs when needed.
