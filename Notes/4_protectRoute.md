The `protectRoute` middleware is used to **protect routes** by ensuring only authenticated users with a valid JWT token can access them.

### Breakdown:
1. **Extract the Token**:
   - `const token = req.cookies.jwt;`: Retrieves the JWT token from the cookies. If no token is found, it responds with a `401` status (Unauthorized).
   
2. **Verify the Token**:
   - `const decoded = jwt.verify(token, process.env.SECRET_KEY);`: Verifies the token using a secret key. If the token is invalid, it returns `401` (Invalid Token).

3. **Find the User**:
   - `const user = await User.findById(decoded.userId).select("-password");`: Fetches the user from the database using the `userId` from the decoded token, excluding the password. If the user is not found, it returns `404` (User Not Found).

4. **Attach User to `req`**:
   - `req.user = user;`: Attaches the found user to `req.user`, making the user's data available for the next middleware or route handler.

5. **Call `next()`**:
   - `next();`: Proceeds to the next middleware if everything is valid.

6. **Error Handling**:
   - If an error occurs (e.g., token is invalid or user not found), it responds with the appropriate error message or logs it. 

This middleware ensures that only authenticated users can access protected routes.