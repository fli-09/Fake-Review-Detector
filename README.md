# 🕵️‍♂️ Fake Review Detector

An AI-powered Chrome Extension that detects whether a product review is likely fake or genuine.  
Built using **BERT embeddings, SMOTE balancing, Logistic Regression, Flask backend**, and a **Chrome Extension frontend** for real-time review evaluation.

---

## 🚀 Features

- ✅ Real-time fake review detection
- ✅ Chrome Extension interface
- ✅ Machine Learning model trained on BERT embeddings
- ✅ Handles imbalanced data using SMOTE oversampling
- ✅ Flask backend API for serving predictions
- ✅ Fully containerized and ready for deployment

---

## 📂 Project Structure

```bash
Fake-Review-Detector/
│
├── backend/               # Flask backend API
│   ├── app.py             # Flask app
│   ├── embedding_utils.py # BERT embedding logic
│   ├── logistic_model_fake_review.pkl  # Trained ML model
│   └── requirements.txt   # Python dependencies
│
├── extension/             # Chrome Extension frontend
│   ├── popup.html
│   ├── popup.js
│   ├── style.css
│   ├── manifest.json
│   └── assets/
│       └── detective.png
│
├── cleaned_balanced_reviews.csv   # Processed training data
├── rf_model_from_auto_labels.pkl  # (Optional) Random Forest model
└── Data_processing.ipynb          # Full model training notebook
