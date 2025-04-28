
import Image from "next/image";
export default function page() {
  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        HAPPY NEW YEAR! New Years Eve: Regular Hours | New Years Day: 11AM-7PM (Sales Only)

      </h1>
      {/* Featured Image */}
      <Image
        src={"/OIP (1).jpeg"}
        width={500}
        height={500}
        alt="AI for everyone"
        className="rounded"
      />
      {/* Blog Summary Section */}
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          Blogging is a great way to share your thoughts with the world.
          It helps you express your ideas clearly and creatively.
          You can write about anything you are passionate about.
          Many people use blogs to teach, inspire, or entertain others.
          Building a blog also improves your writing and communication skills.
          Start your blogging journey today and let your voice be heard!
        </p>
      </section>

      {/* Main Body of Blog */}
      <p className="text-lg leading-normal text-dark/80 dark:text-light/80">
        Blogging is a great way to share your thoughts with the world.
        It helps you express your ideas clearly and creatively.
        You can write about anything you are passionate about.
        Many people use blogs to teach, inspire, or entertain others.
        Building a blog also improves your writing and communication skills.
        Start your blogging journey today and let your voice be heard!
      </p>
    </article>
  );
}
