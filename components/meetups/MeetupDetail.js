import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {

    return (
        <section className={classes.detail}>
            <img
                src={props.selected.image}
                alt={props.selected.title}
            />
            <h1>{props.selected.title}</h1>
            <address>{props.selected.address}</address>
            <p>{props.selected.description}</p>
        </section>
    );
}

export default MeetupDetail;
