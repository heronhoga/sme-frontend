export async function login(username, password) {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }
  
      return {
        status: response.status,
        data: data,
      };
    } catch (error) {
      console.error("Login error:", error);
      return {
        status: error.response?.status || 400, 
        message: error.message || "Something went wrong",
      };
    }
  }
  
  
  export async function register(formData) {
    const { first_name, last_name, email, phone, username, password, role } =
      formData;
  
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": apiKey,
          },
          body: JSON.stringify({
            first_name,
            last_name,
            email,
            phone,
            username,
            password,
            role,
          }),
        }
      );
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }
  
      return {
        status: response.status,
        data: data,
      };
    } catch (error) {
      throw error;
    }
  }
  