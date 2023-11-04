import { useState } from "react";
import LinkButton from "../LinkButton"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"

function handleClick(ev) {
    console.log(ev);
    alert('Você agora está seguindo!');
}

export default function ProfileCard({
    avatar,
    name,
    bio,
    email,
    phone,
    githubUrl,
    linkedinUrl,
    twitterUrl,
}) {
    const [followText, setFollowText] = useState("Follow");

    function handleClick(ev) {
        alert('Você agora está seguindo!');
        setFollowText("Following");
    }

    return (
        <div className={styles.container}>
            <img src={avatar} alt={name} className={styles.avatar} />
            <Title>
                <span>{name}</span>
                <button
                    className={styles.followBtn}
                    type="button"
                    onClick={handleClick}
                >
                    {followText}
                </button>
            </Title>
            <ProfileSection>{bio}</ProfileSection>
            <ProfileSection>{phone}</ProfileSection>
            <ProfileSection>{email}</ProfileSection>
            <ProfileSection
                className={styles.links}
                id="links-section"
                data-test="some value"
                aria-label="social links"
            >
                <LinkButton href={githubUrl}>Github</LinkButton>
                <LinkButton href={linkedinUrl}>LinkedIn</LinkButton>
                <LinkButton href={twitterUrl}>Twitter</LinkButton>
            </ProfileSection>
        </div>
    )
}