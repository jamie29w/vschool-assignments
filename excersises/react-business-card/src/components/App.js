import React from "react";
import Box from "./Box";

function App() {
    return (
        <div>
            <Box nameText="Johnee Appleseed" logoImg="http://diylogodesigns.com/blog/wp-content/uploads/2016/04/Apple-Logo-Png-Download.png" webUrl="www.apple.com" bgCol="SteelBlue"/>
            <Box nameText="Mr. Connected" logoImg="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-icons-social-media-logos/099325-glossy-black-icon-social-media-logos-linkedin-logo-square2.png" webUrl="www.linkedin.com" bgCol="DarkCyan"/>
            <Box nameText="Reah Hydrated" logoImg="http://s3.amazonaws.com/hydroflask/media/media-library-files/images/logos/2017/Hydro-Flask-Logo-Primary-Lockup.png" webUrl="www.hydroflask.com" bgCol="Magenta"/>
            <Box nameText="Speedy G." logoImg="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Brooks.svg/1280px-Brooks.svg.png" webUrl="www.brooks.com" bgCol="RosyBrown"/>
        </div>
    )
};

export default App;
