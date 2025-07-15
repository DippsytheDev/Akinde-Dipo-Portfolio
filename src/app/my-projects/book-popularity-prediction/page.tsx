"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/app/components/sticky-scroll-reveal";
import ScrollVelocity from "@/app/components/scrollvelocity";


const eodp = () => {
  const content = [
    {
      title: "MOTIVATION",
      description: (
        <div>
          <p>
            Books have long been a source of inspiration for blockbuster movies,
            but how do studios decide which ones have cinematic potential? Our
            team set out to answer this question using machine learning. My team
            and I analysed over 18,000 book titles to predict their likelihood
            of becoming high-revenue films, empowering studios with data-driven
            decision-making.
          </p>
        </div>
      ),
    },
    {
      title: "TECHNOLOGIES USED",
      description: (
        <div>
          <p className="mb-4">
            To ensure an efficient and scalable workflow, we utilized a range of
            tools for data handling, model training, and evaluation:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <span className="text-orange">Programming Languages:</span> Python
            </li>
            <li>
              <span className="text-orange">Data Processing:</span> Pandas,
              NumPy
            </li>
            <li>
              <span className="text-orange">Machine Learning:</span>{" "}
              Scikit-learn, TensorFlow
            </li>
            <li>
              <span className="text-orange">Visualization:</span> Matplotlib,
              Seaborn
            </li>
            <li>
              <span className="text-orange">Workflow & Version Control:</span>{" "}
              Jupyter Notebook, GitHub
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "DATA PREPROCESSING AND FEATURE SELECTION",
      description: (
        <div>
          <p className="mb-4">
            We started by diving into the data, cleaning and preprocessing it to
            ensure its quality. This involved handling invalid ISBNs,
            standardizing author names, and dealing with missing or abnormal
            data in book years, user ages, and user countries.
          </p>

          <p className="mb-4">
            To assess a book's popularity, we needed a metric that went beyond
            simple average ratings. We considered both the mean rating and the
            number of people who had rated the book. In our approach, a book's
            average rating was given higher importance than the number of
            ratings. Additionally, we recognized that the significance of each
            additional rating decreases as the total number of ratings
            increases. For instance, a book with a 10/10 rating from 20
            reviewers should be considered more popular than a 10/10 book with
            only 2 reviews. However, the difference in popularity between a book
            with 600 ratings and one with 582 ratings is much less pronounced.
            Our "book popularity score" was designed to capture these nuances.
          </p>
          <div className="mt-4">
            <p
              style={{
                fontFamily: "serif",
                fontSize: "1.5rem",
                textAlign: "center",
              }}
              className="italic mb-4"
            >
              p<sub>i</sub> = r<sub>i</sub> &middot; log<sub>20</sub>(n
              <sub>i</sub> + m)
            </p>
          </div>
          <p className="mb-4">
            <div className="font-bold">Formula explanation:</div>
            <ul className="list-disc list-inside mt-2">
              <li>
                <strong>m</strong> is the mean number of ratings across all
                books.
              </li>
              <li>
                <strong>i</strong> represents a specific book.
              </li>
              <li>
                <strong>
                  p<sub>i</sub>
                </strong>{" "}
                is the popularity score for book <strong>i</strong>.
              </li>
              <li>
                <strong>
                  r<sub>i</sub>
                </strong>{" "}
                is the mean rating for book <strong>i</strong>.
              </li>
              <li>
                <strong>
                  n<sub>i</sub>
                </strong>{" "}
                is the number of ratings for book <strong>i</strong>.
              </li>
            </ul>
          </p>
          <p className="">
            To identify the most influential factors in a book's success, we
            used mutual information scores. We looked at features like book
            author, publication year, number of unique countries reviewing the
            book, and median reviewer age. Author and number of unique country
            reviews stood out as key indicators of popularity.
          </p>
          <table className="table-auto w-full">
            <thead>
              <tr className="text-orange">
                <th className="px-4 py-2">Feature</th>
                <th className="px-4 py-2">Normalized MI Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Book Author</td>
                <td className="border px-4 py-2">0.47535</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Year of Publication</td>
                <td className="border px-4 py-2">0.00749</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  Number of Unique Countries that Have Reviewed the Book
                </td>
                <td className="border px-4 py-2">0.21448</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Median Reviewer Age</td>
                <td className="border px-4 py-2">0.00708</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center mt-4">
            <p className="text-sm">
              The normalised mutual information scores between book popularity
              and various other features of a book.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "UNSUPERVISED LEARNING",
      description: (
        <div>
          <p className="mb-4">
            K-means clustering was used to explore reader demographics, seeking
            patterns based on book popularity, reader age, and global reach.
            While initial visualizations didn't reveal distinct clusters,
            further analysis suggested that reader age was the most significant
            differentiating factor. Ultimately, our clustering analysis
            indicated a general reader base across all ages, rather than
            distinct demographic groups with unique reading habits.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Image
              src="/elbow.png"
              alt="Graph 1"
              width={500}
              height={300}
              className="object-contain"
            />
            <Image
              src="/elbow2.png"
              alt="Graph 2"
              width={500}
              height={300}
              className="object-contain"
            />
          </div>
          <div className="text-center mt-4">
            <p className="text-sm">
              K-Means clustering between 3 features using k = 3 by the Elbow
              Method
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "SUPERVISED LEARNING",
      description: (
        <div>
          <p className="mb-4">
            To quantify the relationship between a book’s popularity and its
            global reach, we used regression analysis. We explored linear,
            quadratic, square root, logarithmic, and reciprocal regressions,
            using 5-fold cross-validation to compare their predictive power.
            Linear regression emerged as the most accurate and precise model.
            Our analysis confirmed a positive, linear relationship: books with a
            wider global spread tend to be more popular.
          </p>
          <div className="flex flex-col mt-4 space-y-4">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr className="text-orange">
                    <th className="px-4 py-2">Regression Technique</th>
                    <th className="px-4 py-2">MSE cross validation round 1</th>
                    <th className="px-4 py-2">MSE cross validation round 2</th>
                    <th className="px-4 py-2">MSE cross validation round 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Linear</td>
                    <td className="border px-4 py-2">1.3418</td>
                    <td className="border px-4 py-2">1.3193</td>
                    <td className="border px-4 py-2">1.3183</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Quadratic</td>
                    <td className="border px-4 py-2">1.3507</td>
                    <td className="border px-4 py-2">1.3287</td>
                    <td className="border px-4 py-2">1.3229</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Square Root</td>
                    <td className="border px-4 py-2">1.4049</td>
                    <td className="border px-4 py-2">1.3798</td>
                    <td className="border px-4 py-2">1.3728</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Logarithmic</td>
                    <td className="border px-4 py-2">1.4936</td>
                    <td className="border px-4 py-2">1.4640</td>
                    <td className="border px-4 py-2">1.4557</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Reciprocal</td>
                    <td className="border px-4 py-2">1.6400</td>
                    <td className="border px-4 py-2">1.6071</td>
                    <td className="border px-4 py-2">1.5911</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr className="text-orange">
                    <th className="px-4 py-2">MSE cross validation round 4</th>
                    <th className="px-4 py-2">MSE cross validation round 5</th>
                    <th className="px-4 py-2">Mean MSE</th>
                    <th className="px-4 py-2">Variance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">1.3878</td>
                    <td className="border px-4 py-2">1.3805</td>
                    <td className="border px-4 py-2">1.3496</td>
                    <td className="border px-4 py-2">0.0009</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">1.3963</td>
                    <td className="border px-4 py-2">1.6514</td>
                    <td className="border px-4 py-2">1.4100</td>
                    <td className="border px-4 py-2">0.0152</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">1.4665</td>
                    <td className="border px-4 py-2">1.3667</td>
                    <td className="border px-4 py-2">1.3981</td>
                    <td className="border px-4 py-2">0.0013</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">1.5772</td>
                    <td className="border px-4 py-2">1.4478</td>
                    <td className="border px-4 py-2">1.4877</td>
                    <td className="border px-4 py-2">0.0022</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">1.7530</td>
                    <td className="border px-4 py-2">1.5894</td>
                    <td className="border px-4 py-2">1.6361</td>
                    <td className="border px-4 py-2">0.0037</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center mt-4">
                <p className="text-sm">
                  The mean squared error (MSE), average of mean squared errors
                  and variance of mean squared errors for each regression
                  technique over 5 rounds of cross validation
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "AUTHOR ANALYSIS",
      description: (
        <div>
          <p className="mb-4">
            Given the strong link between an author’s popularity and a book's
            success, we delved deeper into author analysis. We found that highly
            popular authors often have a larger body of work and a broad global
            audience. For authors with popularity below 8, popularity tends to
            increase as they write more books. Authors with outstanding
            popularities above 8 tend to have “one-hit-wonders.
          </p>
          <div className="flex justify-center items-center">
            <Image
              src="/author.png"
              alt="Graph 3"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
          <div className="text-center mt-4">
            <p className="text-sm">
              Regression analysis of author popularity against the number of books that author has written
            </p>
          </div>
        </div>
      ),
    },

    {
      title: "OUR RECOMMENDATIONS",
      description: (
        <div>
          <p className="mb-4">
            Based on our analysis, we recommend the following strategies for
            selecting books with high potential for film adaptation:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <span className="text-orange">Focus on global reach:</span>{" "}
              Prioritize books with a wide global spread, even if they don't
              have a massive number of readers yet.
            </li>
            <li>
              <span className="text-orange">Bet on established authors:</span>{" "}
              Seek out books by well-established, popular authors, or acquire
              the rights to their works early.
            </li>
            <li>
              <span className="text-orange">
                Consider prolific authors with global appeal:
              </span>{" "}
              Alternatively, consider authors who may not be famous yet but have
              written many books and appeal to a global audience.
            </li>
          </ul>
          <p className="mt-4">
            By following these data-driven strategies, movie production
            companies can increase their odds of selecting books that will
            captivate audiences worldwide and achieve box office success.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="w-full pt-20">
        <div className="bg-[#1a1a1a] flex justify-center items-center">
          <Image
            src={"/eodpheader.svg"}
            alt="Book popularity prediction header image"
            height="1000"
            width="1000"
            className="object-contain"
          />
        </div>
      </div>
      {/* Main Content - Added max-width container */}
      <div className="w-full px-5 md:px-15.5 py-12 h-full">
        <div className="max-w-[1000px] mx-auto">
          {" "}
          {/* Increased max-width to 1280px */}
          <h1 className="font-sans font-semibold text-[43.46px] mb-6">
            BOOK POPULARITY PREDICTION
          </h1>
          <p className="font-mono text-[18.07px] mb-8">
            A <span className="text-orange">machine learning project</span>{" "}
            delivering data-driven strategies for movie production companies to
            select books with high film adaptation potential.
          </p>
          <div className="h-16 overflow-hidden mb-10">
            <ScrollVelocity
              texts={[
                "Python • Machine Learning • Data Analysis • <pandas> • <numpy> • <scikit-learn> • <matplotlib> • <Seaborn> • ",
              ]}
              velocity={20}
              className="font-mono text-[18.07px] text-orange"
              numCopies={4}
              velocityMapping={{ input: [0, 1000], output: [2, 2] }}
              parallaxClassName="h-16"
              scrollerClassName="items-center"
            />
          </div>
          <StickyScroll content={content} />
        </div>
      </div>
    </div>
  );
};

export default eodp;