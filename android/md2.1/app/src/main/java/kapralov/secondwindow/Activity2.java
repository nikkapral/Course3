package kapralov.secondwindow;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class Activity2 extends AppCompatActivity {


    EditText textViewInformationTranspose;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_2);
        textViewInformationTranspose = (EditText) findViewById(R.id.textViewInformationTranspose);
        textViewInformationTranspose.requestFocus();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu){
        menu.add(0,0,0,"First stage");
        menu.add(0,1,1,"Second stage");
        menu.add(0,2,2,"Third stage");
        menu.add(0,3,3,"Fourth stage");

        return super.onCreateOptionsMenu(menu);
    }


    public boolean onOptionsItemSelected(@NonNull MenuItem item){
        switch (item.getItemId()){
            case 0:
                Intent intentMain = new Intent(this,MainActivity.class);
                startActivity(intentMain);
                finish();
                break;
            case 1:
                Intent intent2 = new Intent(this,Activity2.class);
                startActivity(intent2);
                finish();
                break;
            case 2:
                Intent intent3 = new Intent(this,Activity3.class);
                startActivity(intent3);
                finish();
                break;
            case 3:
                Intent intent4 = new Intent(this,Activity4.class);
                startActivity(intent4);
                finish();
                break;
            default:
                break;

        }

        return super.onOptionsItemSelected(item);
    }




    public void textViewInformationTransposeClick(View view){
        textViewInformationTranspose.getText().clear();

    }

    public void buttonInformationTransposeClick(View view){
        String value = textViewInformationTranspose.getText().toString();
        Intent intent = new Intent(this, Activity3.class);
        intent.putExtra("key",value);
        startActivity(intent);

    }








}