const ITEMS_PER_PAGE = 10;

export async function fetchFilteredProducts(
  query: string,
  currentPage: number,
  descendingSortByRating?: boolean
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const response = await fetch(
      process.env.PRODUCTS_API_URL!,
      {
        headers: {
          'X-Master-Key': process.env.PRODUCTS_API_KEY!,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const data = await response.json();
    const products = data.record.products;

    // Filter products based on query
    const filteredProducts = products.filter((product: any) => {
      const queryLower = query.toLowerCase();
      return (
        product.title.toLowerCase().includes(queryLower)
      );
    });

    const sortedProducts = descendingSortByRating
      ? filteredProducts.sort((a: any, b: any) => b.rating - a.rating)
      : filteredProducts;

    // Apply pagination
    return sortedProducts.slice(offset, offset + ITEMS_PER_PAGE);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw new Error('Failed to fetch products.');
  }
}

export async function fetchTotalPages(query: string) {
  try {
    // Fetch all data from API
    const response = await fetch(
      process.env.PRODUCTS_API_URL!,
      {
        headers: {
          'X-Master-Key': process.env.PRODUCTS_API_KEY!,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const data = await response.json();
    const products = data.record.products;

    // Filter products based on query
    const filteredProducts = products.filter((product: any) => {
      const queryLower = query.toLowerCase();
      return (
        product.title.toLowerCase().includes(queryLower) ||
        product.description.toLowerCase().includes(queryLower)
      );
    });

    // Count total number of items
    const totalItems = filteredProducts.length;

    // Calculate total number of pages
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error('Failed to fetch total number of pages:', error);
    throw new Error('Failed to fetch total number of pages.');
  }
}
