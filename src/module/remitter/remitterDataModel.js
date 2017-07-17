/**
 * Created by vijaypawar on 12/07/17.
 */
function remitterDataModel(){
    let self = this;
    this.state = {};
    this.state.id = data.item.id;
    this.state.parentId = this.props.parentId;
    this.state.yooName = '';
    this.state.yooRate = '';
    this.state.yooQuantity = '';
    this.state.yooAmount = '';
}