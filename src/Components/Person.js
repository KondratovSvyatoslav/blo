import React from 'react'
import logo from './../logo.svg';

function firstPageContent() {
    const firstParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n' +
        '                dolore magna aliqua. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Sed egestas egestas\n' +
        '                fringilla phasellus faucibus. Duis ut diam quam nulla porttitor massa. Vel elit scelerisque mauris\n' +
        '                pellentesque pulvinar pellentesque habitant morbi tristique. Pellentesque eu tincidunt tortor aliquam\n' +
        '                nulla facilisi cras. Neque convallis a cras semper auctor. Mauris a diam maecenas sed enim ut sem\n' +
        '                viverra aliquet. Id aliquet risus feugiat in. Volutpat est velit egestas dui id ornare arcu.'
    const secondParagraph = 'Semper eget duis at tellus at urna condimentum. Mollis aliquam ut porttitor leo a diam sollicitudin.\n' +
        '                Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Vestibulum rhoncus est pellentesque\n' +
        '                elit ullamcorper dignissim cras tincidunt lobortis. Sit amet commodo nulla facilisi nullam. Congue\n' +
        '                quisque egestas diam in arcu cursus euismod. Morbi leo urna molestie at elementum eu. Amet mauris\n' +
        '                commodo quis imperdiet massa tincidunt nunc pulvinar. Phasellus faucibus scelerisque eleifend donec\n' +
        '                pretium vulputate sapien nec. Nunc sed blandit libero volutpat sed cras ornare. Feugiat vivamus at augue\n' +
        '                eget arcu dictum varius. In egestas erat imperdiet sed euismod.'
    const thridParagraph = 'Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Ornare quam viverra orci sagittis eu\n' +
        '                volutpat odio facilisis. Ut etiam sit amet nisl purus in mollis nunc. Lacus vel facilisis volutpat est\n' +
        '                velit egestas dui id. Turpis cursus in hac habitasse. Bibendum neque egestas congue quisque egestas diam\n' +
        '                in arcu cursus. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Cursus vitae congue\n' +
        '                mauris rhoncus aenean vel elit scelerisque mauris. Mi tempus imperdiet nulla malesuada pellentesque.\n' +
        '                Lectus mauris ultrices eros in cursus turpis massa tincidunt. Adipiscing commodo elit at imperdiet dui\n' +
        '                accumsan sit amet. Fusce id velit ut tortor pretium viverra. Mauris augue neque gravida in fermentum et\n' +
        '                sollicitudin ac. Vitae suscipit tellus mauris a diam maecenas sed. Ultrices mi tempus imperdiet nulla\n' +
        '                malesuada pellentesque elit eget. Volutpat diam ut venenatis tellus in.'
    return [firstParagraph, secondParagraph, thridParagraph]
}

function secondPageContent() {
    const firstParagraph = 'Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Quis commodo odio aenean sed. Facilisis\n' +
        '                mauris sit amet massa. Consectetur adipiscing elit ut aliquam purus sit. Euismod elementum nisi quis\n' +
        '                eleifend quam adipiscing. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. In ante metus\n' +
        '                dictum at tempor commodo. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas.\n' +
        '                Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Leo integer\n' +
        '                malesuada nunc vel risus commodo. Venenatis tellus in metus vulputate. Sollicitudin tempor id eu nisl\n' +
        '                nunc mi ipsum. Consectetur a erat nam at. Et egestas quis ipsum suspendisse ultrices. Fermentum iaculis\n' +
        '                eu non diam phasellus vestibulum lorem sed. Condimentum mattis pellentesque id nibh tortor. Ac turpis\n' +
        '                egestas sed tempus. Proin gravida hendrerit lectus a. Vitae auctor eu augue ut lectus arcu bibendum at\n' +
        '                varius. Malesuada fames ac turpis egestas.'
    return [firstParagraph]
}

function thirdPageContent() {
    const firstParagraph = 'Consectetur a erat nam at. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Id\n' +
        '                consectetur purus ut faucibus. Neque aliquam vestibulum morbi blandit. Augue ut lectus arcu bibendum at\n' +
        '                varius vel. Enim eu turpis egestas pretium aenean pharetra magna. Magnis dis parturient montes nascetur\n' +
        '                ridiculus mus mauris vitae ultricies. Maecenas sed enim ut sem viverra aliquet eget. Pharetra et\n' +
        '                ultrices neque ornare aenean. Posuere ac ut consequat semper viverra. Ut tortor pretium viverra\n' +
        '                suspendisse potenti nullam ac. Nunc non blandit massa enim nec dui nunc mattis enim. Ultricies leo\n' +
        '                integer malesuada nunc vel risus commodo viverra maecenas. Proin nibh nisl condimentum id venenatis a.\n' +
        '                Diam in arcu cursus euismod. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor\n' +
        '                posuere. Volutpat ac tincidunt vitae semper quis lectus nulla. Nunc aliquet bibendum enim facilisis\n' +
        '                gravida neque convallis a cras. Massa tempor nec feugiat nisl pretium fusce id.'
    return [firstParagraph]
}

const Person = (props) => {
    let fp, sp, tp
    switch (props.page) {
        case 1:
            fp = firstPageContent()[0]
            sp = firstPageContent()[1]
            tp = firstPageContent()[2]
            break;
        case 2:
            fp = secondPageContent()[0]
            break;
        case 3:
            fp = thirdPageContent()[0]
            break;
        default:
            fp = firstPageContent()[0]
            sp = firstPageContent()[1]
            tp = firstPageContent()[2]
            break;
    }
    return (
        <div className="Person">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>{fp}</p>
            <p>{sp}</p>
            <p>{tp}</p>
            <p>{props.page}</p>
            <p>{props.button}</p>
        </div>
    )
}

export default Person
