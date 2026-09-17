FROM python:3.12-slim
WORKDIR /opt/proginsky_ecosystem/proginsky_admin
COPY requirements.txt ./
RUN python -m pip install --upgrade pip && python -m pip install -r requirements.txt
COPY . .
CMD ["python", "main.py"]