import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ru';

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

function withDateTimePretty(Component) {

    return class extends React.Component {
        state = {}
        componentDidMount() {
            const format = "YYYY-MM-DD HH:mm:ss LT";
            this.setState({date: moment(this.props.date, format).locale('ru').fromNow()});
        }
        render() {
            return <Component {...this.props} date={this.state.date} />
        }
    }
}

const DateTimePretty = withDateTimePretty(DateTime)

function Video(props) {
    return (
        <div className="video">
            <iframe title={props.url} src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
    const [list] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2023-07-29 23:04:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2012-12-19 05:45:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2006-12-19 11:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2020-12-19 05:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2022-12-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-11-19 11:10:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}