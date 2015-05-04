themeConf = require('./info.js')
blocks = require('./blocks.js')

//parser
var id = 0;
for(defined in region){
	var customClass = classes[defined],
			customWrapper = wrapper[defined]
			customData = data[defined],
			blocks = block[defined]

	//constructor
	id++
	region[defined] = {
		friendlyName:region[defined],
		macineName:defined,
		rid:id
	}
	//blocks
	if(blocks){
		region[defined]['blocks'] = blocks
	}
	else{
		region[defined]['blocks'] = "";
	}
	//extends
	if(customWrapper){
		region[defined]['wrapper'] = customWrapper;
	}
	else{
		region[defined]['wrapper'] = "div";
	}

	if(customClass){
		region[defined]['class'] = customClass.toString().replace(/\./g,'').split(",").join(" ")+" region-"+defined;
	}
	else{
		region[defined]['class'] = "region-"+defined;
	}

	if(customData){
		d=0;
		var dataFormatted = []
		for(bit in customData){
			var dataName = Object.keys(customData)[d++],
					dataValue = customData[bit],
					dataFormat = 'data-'+ dataName +'="'+ dataValue +'"';
					dataFormatted.push(dataFormat)
					region[defined]['dataFormatted'] = dataFormatted.toString().split(",").join(" ");
					region[defined]['dataRaw'] = customData;
		}
	}
	else{
		region[defined]['dataFormatted'] = "";
	}
}

module.exports = regions;
