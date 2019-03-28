const parser = require('./parser');
const getRichTextNodes = require('./richtext').getRichTextNodes;

Component({
    properties: {
        md: {
            type: String,
            value: '',
            observer(){
                this.parseMd();
            }
        },
		type: {
			type: String,
			value: 'bdmark'
		},
		link: {
			type: Boolean,
			value: false
		},
		highlight: {
			type: Boolean,
			value: false
		}
    },
    data: {
        parsedData: {},
		richTextNodes: []
    },
    methods: {
        parseMd(){
			if (this.data.md) {
				var parsedData = parser.parse(this.data.md, {
					link: this.data.link,
					highlight: this.data.highlight
				});
				if(this.data.type === 'bdmark'){
					console.log(parsedData,"转成md的数组")
					this.setData({
						parsedData
					});
				}else{
					var richTextNodes = getRichTextNodes(parsedData);
					this.setData({
						richTextNodes
					});
				}

            }
        },
        previewImg(event){
        // console.log('传入的参数',event.currentTarget.dataset.item)
          if(event.currentTarget.dataset.item) {
            swan.previewImage({
              urls:[event.currentTarget.dataset.item]
            })
          }
        }
    }
});
