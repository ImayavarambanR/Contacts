export default Ember.HTMLBars.template({"id":"LWoBen+S","block":"{\"statements\":[[\"block\",[\"link-to\"],[\"reminders.create\"],null,8],[\"text\",\"\\n\"],[\"block\",[\"sort-by\"],null,null,7],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"reminder-disp\"],null,[[\"sort\",\"list\"],[[\"get\",[\"result\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"Descend\"],null]]]],false],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"check\"],[[\"get\",[\"result\"]],\"Descending\"],null]],null,0]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"reminder-disp\"],null,[[\"sort\",\"list\"],[[\"get\",[\"result\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"Ascend\"],null]]]],false],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"check\"],[[\"get\",[\"result\"]],\"Ascending\"],null]],null,2,1]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"reminder-list\"],null,[[\"reminder\"],[[\"get\",[\"reminder\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"reminder\"]},{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"list-group\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"reminders\"]]],null,4],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"reminders\"]},{\"statements\":[[\"block\",[\"reminder-filter\"],null,[[\"filter\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"filterByTitle\"],null]]],5],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"check\"],[[\"get\",[\"result\"]],\"CSearch\"],null]],null,6,3],[\"text\",\"\\n\"]],\"locals\":[\"result\"]},{\"statements\":[[\"open-element\",\"button\",[]],[\"static-attr\",\"style\",\"float:right\"],[\"static-attr\",\"class\",\"btn btn-lg btn-danger\"],[\"flush-element\"],[\"text\",\"Create\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}","meta":{"moduleName":"sampleapp/templates/reminders/index.hbs"}});