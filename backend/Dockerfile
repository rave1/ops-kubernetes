FROM python:3.13.0a3-alpine3.19
RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code
RUN pip install -r requirements.txt
ADD . /code/
EXPOSE 5000