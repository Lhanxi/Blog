import styles from './Card.module.css';

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={title} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardDescription}>{description}</p>
                <a href="#" className={styles.continueReading}>
                    CONTINUE READING →
                </a>
            </div>
        </div>
    );
};

export default Card;
