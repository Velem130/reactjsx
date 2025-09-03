from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)

# 🔗 PostgreSQL connection setup 
DB_NAME = "contacts"
DB_USER = "postgres"
DB_PASSWORD = "issahmz9"
DB_HOST = "localhost"
DB_PORT = "5432"  

#  PostgreSQL
def get_connection():
    return psycopg2.connect(
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT
    )

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if not name or not email or not message:
        return jsonify({'error': 'All fields are required.'}), 400

    try:
        conn = get_connection()
        cur = conn.cursor()

        # INSERT into my table velem
        cur.execute(
            "INSERT INTO contacts (name, email, message) VALUES (%s, %s, %s)",
            (name, email, message)
        )

        conn.commit()
        cur.close()
        conn.close()

        return jsonify({'message': 'Message saved to PostgreSQL!'}), 200
    except Exception as e:
        print("Error:", e)
        return jsonify({'error': 'Database error.'}), 500

if __name__ == '__main__':
    app.run(debug=True)
