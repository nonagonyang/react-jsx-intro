function App() {
    return (
      <div>
        <Tweet
          name="zero one"
          username="zeroonezero"
          date={new Date().toDateString()}
          message="Nothing to say really"
        />
        <Tweet
          name="haha"
          username="hahahha"
          date={new Date().toDateString()}
          message="lmao"
        />
        <Tweet
          name="ice cream"
          username="gelato"
          date={new Date().toDateString()}
          message="stop eating!"
        />
      </div>
    );
  }