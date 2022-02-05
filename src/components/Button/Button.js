import styles from './Button.module.scss';

const Button = props => {
    return (<button className={styles.button} text={props.text} type="button" />);
};

export default Button;