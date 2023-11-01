import { useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

function EmailSignInContainer() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    if (code) {
        fetch(`http://localhost:8000/email_signin/?code=${code}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include', 
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                navigate("/", { replace: true });
            } else {
                console.error("Registration failed");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }
}, [code, navigate]);
  return null;
}

export default EmailSignInContainer;