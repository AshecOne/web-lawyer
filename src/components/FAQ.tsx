"use client";
import * as React from "react";

interface IFAQProps {}

const FAQ: React.FunctionComponent<IFAQProps> = (props) => {
  const [expandedQuestionId, setExpandedQuestionId] = React.useState<
    number | null
  >(null);

  const questions = [
    {
      id: 1,
      question: "What types of legal services do you offer?",
      answer:
        "We offer a wide range of legal services, including criminal defense, personal injury, family law, estate planning, and business law. Our experienced attorneys are dedicated to providing personalized legal solutions tailored to your specific needs.",
    },
    {
      id: 2,
      question: "How much do your legal services cost?",
      answer:
        "The cost of our legal services varies depending on the complexity of your case and the specific services required. We offer transparent pricing and will provide you with a detailed fee structure during your initial consultation. We also offer flexible payment options to make our services more accessible.",
    },
    {
      id: 3,
      question: "How can I schedule a consultation with an attorney?",
      answer:
        "To schedule a consultation with one of our attorneys, you can call our office or fill out the contact form on our website. We will promptly get back to you to discuss your legal needs and schedule a convenient time for your consultation.",
    },
    {
      id: 4,
      question: "What should I bring to my initial consultation?",
      answer:
        "For your initial consultation, it's helpful to bring any relevant documents related to your case, such as contracts, court papers, or police reports. You should also bring a list of questions you have for the attorney. If you're unsure what to bring, feel free to contact our office, and we'll guide you.",
    },
    {
      id: 5,
      question: "How long will my case take to resolve?",
      answer:
        "The duration of your case depends on various factors, such as the complexity of the legal issues involved, the court's schedule, and the willingness of the parties to reach a settlement. During your initial consultation, our attorneys will provide you with an estimated timeline based on the specifics of your case.",
    },
    {
      id: 6,
      question: "Will my case go to trial?",
      answer:
        "Not all cases go to trial. Many legal matters can be resolved through negotiation, mediation, or arbitration. However, if a fair settlement cannot be reached, our experienced trial attorneys are prepared to vigorously represent your interests in court.",
    },
  ];

  const toggleQuestion = (questionId: number) => {
    setExpandedQuestionId(
      expandedQuestionId === questionId ? null : questionId
    );
  };

  const leftSideQuestions = questions.slice(0, 3);
  const rightSideQuestions = questions.slice(3);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col space-y-4 md:w-1/2">
            {leftSideQuestions.map((question) => (
              <div
                key={question.id}
                className={`rounded-lg shadow-md ${
                  expandedQuestionId === question.id ? "p-6" : "p-4"
                } bg-[#166432]`}
              >
                <button
                  className="flex items-center justify-between w-full text-left text-white"
                  onClick={() => toggleQuestion(question.id)}
                >
                  <span className="text-xl font-semibold">
                    {question.question}
                  </span>
                  <span
                    className={`rounded-full w-6 h-6 flex items-center justify-center ${
                      expandedQuestionId === question.id
                        ? "bg-red-500"
                        : "bg-gray-200"
                    } text-gray-800`}
                  >
                    {expandedQuestionId === question.id ? "-" : "+"}
                  </span>
                </button>
                {expandedQuestionId === question.id && (
                  <p className="mt-4 text-gray-300">{question.answer}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col space-y-4 md:w-1/2">
            {rightSideQuestions.map((question) => (
              <div
                key={question.id}
                className={`rounded-lg shadow-md ${
                  expandedQuestionId === question.id ? "p-6" : "p-4"
                } bg-[#166432]`}
              >
                <button
                  className="flex items-center justify-between w-full text-left text-white"
                  onClick={() => toggleQuestion(question.id)}
                >
                  <span className="text-xl font-semibold">
                    {question.question}
                  </span>
                  <span
                    className={`rounded-full w-6 h-6 flex items-center justify-center ${
                      expandedQuestionId === question.id
                        ? "bg-red-500"
                        : "bg-gray-200"
                    } text-gray-800`}
                  >
                    {expandedQuestionId === question.id ? "-" : "+"}
                  </span>
                </button>
                {expandedQuestionId === question.id && (
                  <p className="mt-4 text-gray-300">{question.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
