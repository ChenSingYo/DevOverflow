import QuestionCard from '@/components/cards/QuestionCard'
import HomeFilters from '@/components/home/HomeFilters'
import Filter from '@/components/shared/Filter'
import NoResult from '@/components/shared/NoResult'
import LocalSearchBar from '@/components/shared/search/LocalSearchBar'
import { Button } from '@/components/ui/button'
import { HomePageFilters } from '@/constants/filters'
import { getQuestions } from '@/lib/actions/question.action'
import Link from 'next/link'

// const questions = [
//   {
//     _id: '1',
//     title: 'Cascading Deletes In SQLAlchemy',
//     tags: [
//       {
//         _id: '1',
//         name: 'python',
//         picture: 'path/to/python/image.jpg',
//       },
//       {
//         _id: '2',
//         name: 'sql',
//         picture: 'path/to/sql/image.jpg',
//       },
//     ],
//     author: {name:'John Doe', _id: '1'},
//     upvotes: 50,
//     views: 100,
//     answers: [],
//     createdAt: new Date('2021-09-01T12:00:00.000Z'),
//   },
//   {
//     _id: '2',
//     title: 'How to center a div?',
//     tags: [
//       {
//         _id: '3',
//         name: 'css',
//         picture: 'path/to/css/image.jpg',
//       },
//       {
//         _id: '4',
//         name: 'html',
//         picture: 'path/to/html/image.jpg',
//       },
//     ],
//     author: {name: 'Jane Smith', _id: '2'},
//     upvotes: 30,
//     views: 60,
//     answers: [],
//     createdAt: new Date('2021-08-01T12:00:00.000Z'),
//   },
//   {
//     _id: '3',
//     title: 'Understanding async/await in JavaScript',
//     tags: [
//       {
//         _id: '5',
//         name: 'javascript',
//         picture: 'path/to/javascript/image.jpg',
//       },
//       {
//         _id: '6',
//         name: 'async',
//         picture: 'path/to/async/image.jpg',
//       },
//     ],
//     author: {name: 'Alice Brown', _id: '3'},
//     upvotes: 70,
//     views: 200,
//     answers: [],
//     createdAt: new Date('2021-07-01T12:00:00.000Z'),
//   },
//   {
//     _id: '4',
//     title: 'Benefits of using TypeScript',
//     tags: [
//       {
//         _id: '7',
//         name: 'typescript',
//         picture: 'path/to/typescript/image.jpg',
//       },
//     ],
//     author: {name: 'Robert Red', _id: '4'},
//     upvotes: 40,
//     views: 80,
//     answers: [],
//     createdAt: new Date('2021-06-01T12:00:00.000Z'),
//   },
//   {
//     _id: '5',
//     title: 'Best practices in Vue 3',
//     tags: [
//       {
//         _id: '8',
//         name: 'vue',
//         picture: 'path/to/vue/image.jpg',
//       },
//       {
//         _id: '9',
//         name: 'best-practices',
//         picture: 'path/to/best-practices/image.jpg',
//       },
//     ],
//     author: {name: 'Lucy Green', _id: '5'},
//     upvotes: 65,
//     views: 150,
//     answers: [],
//     createdAt: new Date('2021-05-01T12:00:00.000Z'),
//   },
//   {
//     _id: '6',
//     title: 'How to use hooks in React?',
//     tags: [
//       {
//         _id: '10',
//         name: 'react',
//         picture: 'path/to/react/image.jpg',
//       },
//       {
//         _id: '11',
//         name: 'hooks',
//         picture: 'path/to/hooks/image.jpg',
//       },
//     ],
//     author:{name: 'Michael Blue', _id: '6'},
//     upvotes: 55,
//     views: 110,
//     answers: [],
//     createdAt: new Date('2021-04-01T12:00:00.000Z'),
//   },
// ]

export default async function Home() {

  const result = await getQuestions({})
//  console.log('result', result)

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          placeholder="Search for questions"
          imgSrc="/assets/icons/search.svg"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ? (
          result.questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              upvotes={question.upvotes}
              author={question.author}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
            discussion. our query could be the next big thing others learn from. Get
            involved! 💡"
            link="/ask-question"
            linkTitle="ask question"
          />
        )}
      </div>
    </>
  )
}
