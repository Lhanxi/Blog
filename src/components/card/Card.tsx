import styles from './Card.module.css';

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, link }) => {
    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={title} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardDescription}>{description}</p>
                <a href={link} className={styles.continueReading}>
                    CONTINUE READING →
                </a>
            </div>
        </div>
    );
};

export default Card;
