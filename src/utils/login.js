export const fetchTodo = async () => {
   try {
      const res = await fetch('https://hack-nasa.com');
      const data = await res.json();
      return data;
   } catch (error) {
      throw error.message;
   }
};
