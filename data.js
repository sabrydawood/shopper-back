import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'virus24',
      email: 'kazouya25@gmail.com',
      password: bcrypt.hashSync('50005498'),
      isAdmin: true,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
  ],
};
export default data;