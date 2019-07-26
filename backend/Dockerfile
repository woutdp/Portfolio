FROM python:3.7-alpine
COPY . /backend
WORKDIR /backend
RUN pip install -r requirements.txt
CMD ["gunicorn", "--config", "./gunicorn_config.py", "wsgi:app"]