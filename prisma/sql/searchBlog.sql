SELECT * FROM "Blog" WHERE 
  SIMILARITY("title", $1) > 0.2 
  OR 
  SIMILARITY("author", $1) > 0.2 
  OR 
  SIMILARITY("category", $1) > 0.2 
  ORDER BY SIMILARITY("title", $1) DESC
  LIMIT 15 OFFSET ($2 - 1) * 15