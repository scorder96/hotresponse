const Outcomes = () => {
  return (
    <section className="py-16">
      <h2 className="text-lg text-center font-bold mb-8">Outcomes</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
        <div className="rounded shadow hover:shadow-lg p-4">
          <h2 className="bg-clip-text text-transparent bg-orange-400 text-2xl md:text-2xl font-bold mb-4">
            Save
          </h2>
          <p>Time and effort</p>
        </div>
        <div className="rounded shadow hover:shadow-lg p-4">
          <h2 className="bg-clip-text text-transparent bg-orange-400 text-2xl md:text-2xl font-bold mb-4">
            Understand
          </h2>
          <p>User experience</p>
        </div>
        <div className="rounded shadow hover:shadow-lg p-4">
          <h2 className="bg-clip-text text-transparent bg-orange-400 text-2xl md:text-2xl font-bold mb-4">
            Improve
          </h2>
          <p>Product, service and software</p>
        </div>
        <div className="rounded shadow hover:shadow-lg p-4">
          <h2 className="bg-clip-text text-transparent bg-orange-400 text-2xl md:text-2xl font-bold mb-4">
            Test
          </h2>
          <p>New features</p>
        </div>
        <div className="rounded shadow hover:shadow-lg p-4">
          <h2 className="bg-clip-text text-transparent bg-orange-400 text-2xl md:text-2xl font-bold mb-4">
            Work
          </h2>
          <p>On negative users</p>
        </div>
        <div className="rounded shadow hover:shadow-lg p-4">
          <h2 className="bg-clip-text text-transparent bg-orange-400 text-2xl md:text-2xl font-bold mb-4">
            Sell
          </h2>
          <p>To positive users</p>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
