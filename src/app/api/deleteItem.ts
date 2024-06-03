'use server';
import { sql } from '@vercel/postgres';

export default async function deleteItemByTitle(title: string) {
  const client = await sql.connect();
  try {
    // Check if the title exists in lost_items
    let { rows: lostItemsRows } = await client.sql`
      SELECT * FROM lost_items WHERE title = ${title}
    `;

    // If found in lost_items, delete it
    if (lostItemsRows.length > 0) {
      await client.sql`DELETE FROM lost_items WHERE title = ${title}`;
      console.log(`Item with title "${title}" deleted from lost_items`);
      return; // Exit the function since we've deleted the item
    }

    // Check if the title exists in found_items
    let { rows: foundItemsRows } = await client.sql`
      SELECT * FROM found_items WHERE title = ${title}
    `;

    // If found in found_items, delete it
    if (foundItemsRows.length > 0) {
      await client.sql`DELETE FROM found_items WHERE title = ${title}`;
      console.log(`Item with title "${title}" deleted from found_items`);
      return; // Exit the function
    }

    // If not found in either table
    console.log(`Item with title "${title}" not found in either table`);
  } catch (error) {
    console.error("Error deleting item:", error);
  } finally {
    client.release();
  }
}
