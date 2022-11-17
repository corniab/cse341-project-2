import user from '../controllers/user.controllers';
import express from 'express';

const userRouter = express.Router();
/**
 * @openapi
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: Unique identification number
 *        identifier:
 *          type: string
 *          description: oauth identifier
 *        email:
 *          type: string
 *          description: email
 *        givenName:
 *          type: string
 *          description: first name
 *        familyName:
 *          type: string
 *          description: last name
 *        locale:
 *          type: string
 *          description: locale
 *        picture:
 *          type: string
 *          description: url to picture
 */

/**
 * @openapi
 * tags:
 *  name: Users
 *  description: API to manage users
 */

/**
 * @openapi
 * /users:
 *  get:
 *    tags:
 *      - Users
 *    description: Get all users
 *    responses:
 *      200:
 *        description: Success
 */
userRouter.get('/', user.get);

/**
 * @openapi
 * /users/{id}:
 *  get:
 *    tags:
 *      - Users
 *    description: Get user by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: Success
 */
userRouter.get('/:id', user.getOne);

/**
 * @openapi
 * /users:
 *  post:
 *    tags:
 *      - Users
 *    description: Create a new user
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *      - name: email
 *        in: formData
 *        required: true
 *        type: string
 *      - name: givenName
 *        in: formData
 *        required: true
 *        type: string
 *      - name: familyName
 *        in: formData
 *        required: true
 *        type: string
 *      - name: locale
 *        in: formData
 *        required: true
 *        type: string
 *      - name: picture
 *        in: formData
 *        required: true
 *        type: string
 *    responses:
 *      201:
 *        description: Created
 */
userRouter.post('/', user.post);

/**
 * @openapi
 * /users:
 *  put:
 *    tags:
 *      - Users
 *    description: Edit a current user
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *      - name: email
 *        in: formData
 *        required: false
 *        type: string
 *      - name: givenName
 *        in: formData
 *        required: false
 *        type: string
 *      - name: familyName
 *        in: formData
 *        required: false
 *        type: string
 *      - name: locale
 *        in: formData
 *        required: false
 *        type: string
 *      - name: picture
 *        in: formData
 *        required: false
 *        type: string
 *    responses:
 *      201:
 *        description: Created
 */
userRouter.put('/:id', user.put);

/**
 * @openapi
 * /users/{id}:
 *  delete:
 *    tags:
 *      - Users
 *    description: Delete user by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Success
 */
userRouter.delete('/:id', user.delete);

export default userRouter;
