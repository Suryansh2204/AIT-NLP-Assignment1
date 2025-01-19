# AIT-NLP-Assignment1

## Overview

This repository contains an NLP-based project with a React frontend and a Flask backend, along with Jupyter notebooks for training various models. The structure is organized as follows:

```
AIT-NLP-Assignment1/
│── app/
│   ├── client/   # React frontend
│   │   ├── Dockerfile
│   │   ├── public/
│   │   ├── src/
│   ├── server/   # Flask backend
│   │   ├── models/
│   │   ├── app.py
│   │   ├── requirements.txt
│   │   ├── Dockerfile
│   ├── docker-compose.yml  # Docker Compose configuration
│── notebooks/
│   ├── dataset/  # Contains datasets
│   ├── models/   # Stores trained models, word2index, and index2word mappings
│   ├── 01 - Word2Vec (Skipgram).ipynb
│   ├── 02 - Word2Vec (Neg Sampling).ipynb
│   ├── 03 - GloVe from Scratch.ipynb
│   ├── 04 - GloVe (Gensim).ipynb
│   ├── Report.ipynb
│── README.md
```

## Setup and Running the Application

This project can be run using Docker. Follow the steps below to set up and run the application.

### Running the Application

1. Navigate to the app directory:

```
cd app
```

2. Run Docker Compose:

```
docker compose up -d
```

This command will build the images and start the containers in detached mode.

### Application Endpoints

- **Frontend (React app):** Runs on http://localhost:3000
- **Backend (Flask API):** Runs on http://localhost:5000

### API Endpoints

- GET / - Returns author information.
- POST /predict - Takes a query, passes it to the model for prediction, and returns the result.

### Notebooks

The notebooks/ directory contains Jupyter notebooks for training various NLP models, including Word2Vec and GloVe implementations. The trained models, along with word-to-index and index-to-word mappings, are stored in notebooks/models/.
Also a report.ipynb is created which contains the time taken to train the model and their loss, semantic and syntactic analysis, and mse of the models.
