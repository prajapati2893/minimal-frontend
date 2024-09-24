This project is a sample minimal frontend application which gets the list from minimal-backend and renders it.

docker build \
 --build-arg REACT_APP_BACKEND="http://localhost:8080/api" \
 -t minimal-frontend .