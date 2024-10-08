# 1.in frontend Folder
creating vite  => npm create vite@latest . ( here dot indicates that install in current folder)
Run program => npm run dev

# 2.in main Root (easier for Deploying)
`npm init -y `
`npm i express cookie-parser dotenv socket.io jsonwebtoken` `bcryptjs mongoose` 

`npm i nodemon --save-dev` (-D or --save-dev is for Development dependency )

# 3.ES6 Model

- ` import and export `
- ` type:module in pck.json file AND .js extension while importing`

# 4.jsonWebTokens for AUTHENTICATION

- `type any randomletters`
 -`OR type : openssl rand -base64 32 => this will genrate u a new random word use it as JST`

 
 
 # 5.type:mongoose.Schema.Types.objectId,
 In Mongoose, the `type: mongoose.Schema.Types.ObjectId` is used to define a **reference** to another document in a MongoDB collection. This essentially creates a relationship between two collections.

### Explanation:

- **`mongoose.Schema.Types.ObjectId`**:
  - This refers to the **ObjectId** type in MongoDB, which is a unique identifier for each document in a collection. It's used as a data type for a field in the schema.
  
- **Usage**: When you use `ObjectId`, it usually indicates that this field will store a reference (or link) to another document from another collection. This is commonly used for **referencing** other models (like foreign keys in relational databases).



# 6.select() in MongoDb

In MongoDB, the `select()` method is often used in Mongoose to specify which fields should be included or excluded in the query results. This is particularly useful when you want to retrieve only the necessary fields to optimize performance and reduce data transfer.

### Syntax

You can use `select()` with either **inclusion** or **exclusion**:

1. **Inclusion**: Specify the fields you want to include by passing them as a string or object.
2. **Exclusion**: Specify the fields you want to exclude by using the `-` prefix.



### Full Example

Here’s a complete example of how to use `select()` with a Mongoose query:

```javascript
import User from './models/user.model.js';

// Get a user by ID and only return the name and email, excluding the password
const getUser = async (userId) => {
    try {
        const user = await User.findById(userId).select('name email -password');
        console.log(user);
    } catch (error) {
        console.error('Error fetching user:', error);
    }
};
```

### Summary

- Use `select()` to control which fields to include or exclude in the result set.
- To exclude fields, prefix them with `-`.
- Stick to either inclusion or exclusion for clarity, though mixing is possible.
