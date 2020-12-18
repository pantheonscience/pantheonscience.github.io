var info =
{
  "type": "simple",
  "version": "1.1",
  "metadata": 
  {
    "type": "parametric-image-stack"
  },
  "name_pattern": "{time}/{phi}_{theta}_clover_db.png",
  "arguments": 
  {
    "time": 
    {
      "default": "0.0",
      "label": "time",
      "type": "range",
      "values": 
      [
        "0.0",
        "1.0",
        "2.0",
        "3.0",
        "4.0",
        "5.0",
        "6.0",
        "7.0",
        "8.0",
        "9.0",
        "10.0",
        "11.0",
        "12.0",
        "13.0",
        "14.0",
        "15.0",
        "16.0",
        "17.0",
        "18.0",
        "19.0"
      ]
    },
    "phi": 
    {
      "default": "-180.0",
      "label": "phi",
      "type": "range",
      "values": 
      [
        "-180.0",
        "-90.0",
        "0.0",
        "90.0"
      ]
    },
    "theta": 
    {
      "default": "0.0",
      "label": "theta",
      "type": "range",
      "values": 
      [
        "0.0",
        "45.0",
        "90.0",
        "135.0"
      ]
    }
  }
}