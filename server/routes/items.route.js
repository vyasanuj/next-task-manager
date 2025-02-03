import express from 'express';
import {getItems, createItem, updateItem, deleteItem } from '../controllers/items.controller.js';

const router = express.Router();

router.get('/', getItems); // Fetch all items
router.post('/', createItem); // Create a new item
router.put('/:id', updateItem); // Update an item by ID
router.delete('/:id', deleteItem); // Delete an item by ID

export default router;
