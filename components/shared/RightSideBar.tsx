import Image from 'next/image'
import Link from 'next/link'
import RenderTag from './RenderTag'

const RightSideBar = () => {
  const hotQuestions = [
    {
      _id:'1',
      title: 'How do I use express as a custom server in NextJS?',
    },
    {
      _id:'2',
      title: 'How do I use express as a custom server in NextJS?',
    },
    {
      _id:'3',
      title: 'How do I use express as a custom server in NextJS?',
    },
    {
      _id:'4',
      title: 'How do I use express as a custom server in NextJS?',
    },
    {
      _id:'5',
      title: 'How do I use express as a custom server in NextJS?',
    },
  ]

  const tags = [
    {
      _id:'1',
      name: 'NextJS',
      totalQuestions: 5,
    },
    {
      _id:'2',
      name: 'JS',
      totalQuestions: 2,
    },
    {
      _id:'3',
      name: 'React',
      totalQuestions: 10,
    },
    {
      _id:'4',
      name: 'Vue',
      totalQuestions: 5,
    },
    {
      _id:'5',
      name: 'SASS',
      totalQuestions: 2,
    },
  ]

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((q) => {
            return (
              <Link
                className="flex cursor-pointer items-center justify-between gap-7"
                href={'/questions/' + q._id}
                key={q._id}
              >
                <p className="text-dark500_light700 body-medium">{q.title}</p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="chevron-right"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            )
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {tags.map((tag) => {
            return (
              <RenderTag
                _id={tag._id}
                key={tag._id}
                name={tag.name}
                totalQuestions={tag.totalQuestions}
                showCount
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default RightSideBar
