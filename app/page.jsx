import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Create Article & Share Information
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'>Type Topic Find Article</span>
    </h1>

    <Feed />
  </section>
);

export default Home;
