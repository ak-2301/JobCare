import React from "react";
import Layout from "../components/Layout/Layout";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="row">
        <div className="col-3">
          <Layout name={"Ankit kansal"}></Layout>
        </div>
        <div className="col-9">
          <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Total Jobs Stats
                </h2>
              </div>

              <div className="mt-8 sm:mt-12">
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Total Applied
                    </dt>

                    <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                      90
                    </dd>
                  </div>

                  <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Shortlisted
                    </dt>

                    <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                      10
                    </dd>
                  </div>

                  <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-gray-500">
                     Interview
                    </dt>

                    <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                      4
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
