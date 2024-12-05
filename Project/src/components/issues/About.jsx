
import React from "react";
 
const About = () => {
  const teamMembers = [
    {
      name: "Vibhav Kulavmode",
      title: "Team Captain | PL",
      description:
        "A creative thinker and team leader, always brimming with ideas to drive success. Loves music, travel, and cultural exploration.",
    },
    {
      name: "Shivani Gore",
      title: "Innovation Specialist | Team-Member",
      description:
        "A tech enthusiast and coding expert, always ready to tackle challenges. Enjoys coffee, algorithms, and thought-provoking discussions.",
    },
    {
      name: "Suyash",
      title: "Creative Thinker | Team-Member",
      description:
        "Software innovator with a love for clean code, great books, and exploring the mysteries of space and psychology.",
    },
    {
      name: "Shuaib",
      title: "Execution Expert | Team-Member",
      description:
       "A passionate coder, you can often find him hunched over a laptop with a cup of coffee testing an algorithm or writing lines of code. You can have endless conversations with him about everything from space, and so on.",
    },
    {
      name: "Nikhil Patil",
      title: '"Collaboration Champion" | Team-Member',
      description:
      "Always with innovative ideas and plans to bring into the Project. He loves his work more than anything, and spends most of his time with the team.",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Our Team</h1>
      <div style={styles.cardContainer}>
        {teamMembers.map((member, index) => (
          <div key={index} style={styles.card}>
            <h2 style={styles.name}>{member.name}</h2>
            <h4 style={styles.title}>{member.title}</h4>
            <p style={styles.description}>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  header: {
    color: "#333",
    marginBottom: "20px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    maxWidth: "300px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  name: {
    fontSize: "1.5em",
    color: "#007BFF",
  },
  title: {
    fontSize: "1em",
    fontStyle: "italic",
    marginBottom: "10px",
  },
  description: {
    fontSize: "0.9em",
    color: "#555",
  },
};

export default About;
