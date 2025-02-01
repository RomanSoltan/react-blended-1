import BlogCard from './components/BlogCard/BlogCard';
import Container from './components/Container/Container';
import CryptoHistory from './components/CryptoHistory/CryptoHistory';
import ForbesList from './components/ForbesList/ForbesList';
import Heading from './components/Heading/Heading';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import article from './data/article.json';
import stats from './data/stats.json';
import forbes from './data/forbes.json';
import transactions from './data/transactions.json';

export const App = () => {
  const { poster, tag, title, description, name, avatar, postedAt } = article;

  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard
          poster={poster}
          tag={tag}
          title={title}
          description={description}
          name={name}
          avatar={avatar}
          postedAt={postedAt}
        />

        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" stats={stats} />

        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList list={forbes} />

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory items={transactions} />
      </Container>
    </Section>
  );
};
