import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, TextInput} from 'react-native';
import {Style} from './src/style';
import { useState, useEffect } from 'react';
import Select from 'react-select';

export default function App() {

  const options = [
    {value: 22.50, label: "22.50% Até 180 dias(6 meses)"},
    {value: 20.00, label: "20.00% De 181 à 360 dias (12 meses)"},
    {value: 17.50, label: "17.50% De 361 à 720(24 meses)"},
    {value: 15.00, label: "15.00% Mais de 720 dias"}
  ];

  const [value, setValue] = useState();
  const [CDB, setCDB] = useState();
  const [tax, setTax] = useState('#');
  const [rend, setRend] = useState('#');
  const [capital, setCapital] = useState("#");
  const [time, setTime] = useState();

  useEffect(() => {
    var R;
    if (parseInt(time) <= 180) {
      setTax(22.50);
      R = parseFloat(CDB) * (1 - 0.225);
    }
    else if (parseInt(time) > 180 && parseInt(time) <= 360) {
      setTax(20.00);
      R = parseFloat(CDB) * (1 - 0.2);
    }
    else if (parseInt(time) > 360 && parseInt(time) <= 720) {
      setTax(17.50);
      R = parseFloat(CDB) * (1 - 0.175);
    }
    else if (parseInt(time) > 720) {
      setTax(15.00);
      R = parseFloat(CDB) * (1 - 0.15);
    }
    if (parseInt(time) > 0) {
      setRend(R);
    }
  }, [time]);

  function calculateRendiment() {
    var i = parseFloat(rend) * 0.1375;
    var M = parseFloat(value) * (1 + (i / 100)) ** (parseInt(time) / 30);
    setCapital(parseFloat(M).toFixed(2));
  }

  return (
    <View style={Style.container}>
      <Text style={Style.title}>Calculadora CDB</Text>

      <div style={Style.div2}>
        <div>
        <Text style={Style.div3Text}>Digite a taxa do CDB relativa ao investimento: </Text>
        <TextInput style={Style.div3Input} onChange={e => setCDB(parseFloat(e.target.value))} multiline={false}/>
        </div>

        <div>
          <Text style={Style.div3Text}>Digite o tempo de investimento em dias: </Text>
          <TextInput style={Style.div3Input} onChange={e => setTime(parseInt(e.target.value))} multiline={false}/>
        </div>

        <div>
          <Text style={Style.text2}>Rendimento real do CDB:<Text style={Style.textR}>{rend}%</Text></Text>
        </div>
        <div>
          <Text style={Style.text2}>Taxa sobre rendimento:<Text style={Style.textT}>{tax}%</Text></Text>
        </div>
      </div>

    
      <div style={Style.div1}><Text style={Style.text}>Digite o valor a ser calculado em reais: </Text>
      <TextInput style={Style.input} onChange={e => setValue(parseFloat(e.target.value))} multiline={false}/>
      </div>

      <div style={Style.div1}>
        <Text style={Style.text2}>Valor total de Montante:<Text style={Style.textM}>R$ {capital}</Text></Text>
      </div>

      <TouchableOpacity>
        <Text style={Style.button} onPress={() => {calculateRendiment(); console.log(tax)}}>Calcular</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
