<template>
  <div>
    <h1>Books</h1>
    <ul>
      <li v-for="book in books" class="items-center justify-center m-2">
        <BookCard :imageUrl="book.imageUrl" :linkUrl="book.linkUrl" :title="book.title" :summary="book.summary"/>
      </li>
    </ul>
  </div>
</template>
<script>
import BookCard from '@/components/BookCard.vue'

export default {
  components: {
    BookCard
  },
  data() {
    return {
      books: [
        {
          imageUrl: 'https://images-eu.bookshop.org/product-images/images/9781108716833.jpg',
          linkUrl: 'https://uk.bookshop.org/books/python-by-example-learning-to-program-in-150-challenges/9781108716833',
          title: "Python By Example",
          summary: "Book we use to teach Python for GCSE Computer Science"
        },
        {
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51hwdTWJdPL._SX384_BO1,204,203,200_.jpg',
          linkUrl: 'https://www.amazon.co.uk/CoderDojo-First-Website-Create-Code/dp/1405278730',
          title: "Create with <Code> Build your own Website",
          summary: "Official Coder Dojo book"
        }
      ]
    }
  }
}
</script>
