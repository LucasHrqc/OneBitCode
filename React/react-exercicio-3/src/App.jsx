import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <div className="app">
      <ProfileCard
        avatar="https://randomuser.me/api/portraits/men/75.jpg"
        name="John Doe"
        bio="Full-stack javascript developer at Acme Inc."
        email="john.doe@email.com"
        phone="+55123345576"
        githubUrl="https://github.com"
        linkedinUrl="https://linkedin.com"
        twitterUrl="https://twitter.com"
      />
    </div>
  )
}
