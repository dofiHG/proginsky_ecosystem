FROM python:3.12-slim
WORKDIR /opt/proginsky_ecosystem/proginsky_mail_service
COPY requirements.txt ./
RUN python -m pip install \
    --upgrade pip \
    && python -m pip install \
    -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8890"]