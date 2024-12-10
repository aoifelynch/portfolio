const About = () => {
  return (
    <>
      <div class="breadcrumbs text-sm ml-2">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Me</a></li>
        </ul>
      </div>

      <div class="container mx-auto px-4 py-12">

        <div class="chat chat-start">
          <div class="chat-bubble chat-bubble-primary">
            Tell us the basics, who are you!
          </div>
        </div>
        <div class="chat chat-end">
          <div class="chat-bubble chat-bubble-info">Okay, so, my name is Aoife Lynch. I'm twenty years old. I was born in Kerry, lived in Australia for a few years and now I live in Dublin whilst studying my degree at IADT.</div>
        </div>
        <div class="chat chat-start">
          <div class="chat-bubble chat-bubble-secondary">
            You got any interests?
          </div>
        </div>
        <div class="chat chat-end">
          <div class="chat-bubble chat-bubble-success">
            Who has time for hobbies these days!? JK... if I ever have a day off it is spent either with my friends, playing games or catching up on TV (I will have my cat with me during all of those instances)
          </div>
        </div>

        <div class="chat chat-start">
          <div class="chat-bubble chat-bubble-accent">
            What's your plan for the future?
          </div>
        </div>
        <div class="chat chat-end">
          <div class="chat-bubble chat-bubble-error">
            Well after I get this degree, I'm planning on continuing to live and work in Dublin. However, the dream is to be able to go between Australia and Dublin while working remotely (year-long summer!)
          </div>
        </div>
        <div class="chat chat-start">
          <div class="chat-bubble chat-bubble-warning">
            That's the dream! Well, if I have any other questions, I'll give you a shout :)
          </div>
        </div>
      </div>
      <div class="flex justify-center mb-6">
          <a href="mailto:aoifellynch@outlook.com">
            <button class="btn btn-primary w-44 text-base">Email Me!</button>
          </a>
        </div>
    </>
  );
};

export default About;
