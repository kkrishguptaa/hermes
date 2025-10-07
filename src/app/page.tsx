import Link from "next/link";

export default function Home() {
  const socialLinks = [
    { href: "https://poems.krishg.com", label: "Poems" },
    { href: "https://blog.krishg.com", label: "Blog" },
    { href: "https://instagram.com/kkrishguptaa", label: "Instagram" },
    { href: "https://x.com/kkrishguptaa", label: "Twitter" },
    { href: "https://linkedin.com/in/kkrishguptaa", label: "LinkedIn" },
    { href: "https://github.com/kkrishguptaa", label: "GitHub" },
    { href: "mailto:m.krishggupta@icloud.com", label: "Email" },
    { href: "https://krishg.com", label: "Portfolio (WIP)" },
  ];

  return (
    <article className="prose prose-invert prose-lg md:prose-xl lg:prose-2xl prose-zinc prose-headings:font-display prose-a:underline prose-a:underline-offset-6">
      <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-9xl !mb-0">
        Krish Gupta
      </h1>
      <hr className="border-zinc-300 !mt-6 !mb-6" />
      <p>
        I'm Krish, a high school senior, software engineer, poet and human.
        <br />
        This is a website where I share to people who wish to connect with me
        and know more about me!
      </p>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 list-none w-full justify-between gap-2 !pl-0">
        {socialLinks.map(({ href, label }) => (
          <li key={href} className="!pl-0 !m-0">
            <Link href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <section>
        <h2 className="!mb-0">Select Achievements.</h2>
        <hr className="border-zinc-300 !mt-6 !mb-6" />
        <p>
          <strong>reseter.css:</strong> I built a CSS reset when I was 12 that
          received over 1.2k stars on{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kkrishguptaa/reseter.css"
          >
            GitHub
          </Link>{" "}
          and a massive amount of use. As of last statistic recording, it had
          ~100k downloads and received ~12m/year recorded CDN hits. It was
          featured on several frontend publications of the time and showcased on
          numerous newsletters.
        </p>
        <p>
          <strong>HackTheMountains:</strong> I lead the social media and content
          team for the largest community hackathon in India. 550k+ impressions/3
          months on social media. Hosted 7 twitter spaces (500+ attendees were
          in the one space). Handled the community partner (50 partners) and
          evangelist (60 evangelists) program. Gained 270 clicks/week. Built the
          economy{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kkrishguptaa/bot-dc-htm"
          >
            discord bot
          </Link>
          , used by 4k+ members of the discord server, oversaw deployment of
          this on AWS as well.
        </p>
        <p>
          <strong>PRUMUN League:</strong> Director General of the prudence model
          UN league conference. Led a secretariat of 12 people and organized a
          conference of 400+ students. Assumed the driving seat in{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="http://instagram.com/prumunleague"
          >
            social media
          </Link>
          , graphic design, team management and event planning. The feedback was
          overwhelmingly positive from the attendees. Previously, I was also a
          trainer for the school's MUN society. I trained roughly 200 students
          in public speaking and debate. A huge portion of the MUN's secretariat
          were my students.
        </p>
        <p>
          <strong>Student Council:</strong> Competed in an election to be the
          Head Boy of the school. Won the election with a voter turnout of 1200+
          students. Actively worked towards organizing various recognition
          events in the school such as Talent Shows. Represented the student
          body in all of its events. Previously served as the Cultural Prefect.
        </p>

        <p>
          <strong>Program Management Internship:</strong> Managed{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://semasoftware.com"
          >
            Sema Software
          </Link>
          's global ambassador program to educate young people on code reviews.
          Showcased proficiency in event planning, application review,
          conducting interviews, and facilitating communication between
          ambassadors. Also, built and maintained the Sema community and managed
          the Discord server of 1k+ members.
        </p>

        <p>
          <strong>Twitter:</strong> Grew an organic following of 4.5k+ on
          Twitter. I used to actively tweet about initially web development, and
          then developer operations engineering. I funnelled some of this
          audience to my blog and{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/XKbtzF6kUs"
          >
            Discord
          </Link>{" "}
          community. I taught people about various concepts in web development
          (especially CSS and TypeScript) and DevOps (especially GitHub Actions
          and Docker).
        </p>
      </section>

      <section>
        <h2 className="!mb-0">Select Future Projects.</h2>
        <hr className="border-zinc-300 !mt-6 !mb-6" />
        <p>
          <strong>Poetria:</strong> Twitter but for poems. A platform to
          showcase and discover poetry in a social media format.
        </p>
        <p>
          <strong>Hatchet:</strong> Open Source Slack alternative. With 100%
          encryption and privacy.
        </p>
        <p>
          <strong>Channing:</strong> Awfully lightweight analytics platform. I
          am making this because I like tiny bundle sizes.
        </p>
        <p>
          <strong>WhiteStone:</strong> A collection of role play versions of
          massive products such as Google, Facebook, etc. Think a miniature role
          play internet and economy.
        </p>
      </section>

      <section>
        <h2 className="!mb-0">Select Interests and Hobbies.</h2>
        <hr className="border-zinc-300 !mt-6 !mb-6" />
        <p>
          <strong>CSS:</strong> I enjoy working with CSS and understanding its
          quirks. I'm WIP on a guide on CSS concepts.
        </p>
        <p>
          <strong>Poetry:</strong> I write a lot of poems on self-reflection,
          love and death. Those are the three major themes, but you will find
          several others as well.
        </p>
        <p>
          <strong>TypeScript:</strong> God damn generic types are so cool. I
          cannot work in JavaScript without TypeScript.
        </p>
        <p>
          <strong>DevOps:</strong> I like the idea of automating everything. I
          also like the idea of making everything small and modular.
        </p>
      </section>

      <section>
        <h2 className="!mb-0">Select Obsessions.</h2>
        <hr className="border-zinc-300 !mt-6 !mb-6" />
        <p>
          Greek mythology, Sylvia Plath, Harry Potter, Pokemon, Bungou Stray
          Dogs, Spy X Family, Regina Song, Conan Gray, Laufey, Billie Eilish,
          Studio Ghibli
        </p>
      </section>
    </article>
  );
}
